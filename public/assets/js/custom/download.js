
var urlParams = new URLSearchParams(window.location.search);
var isLoggedIn = function () {
  return document.cookie.match(/^(.*;)?\s*auth-token\s*=\s*[^;]+(.*)?$/);
};

var isTesting = function () {
  return document.cookie.match(/testing_testing/);
};

var onReady = function () {
  var isBlog = window.location.href.indexOf("blog") >= 0;


  if (isLoggedIn()) {
    var isShowrunner = window.location.href.indexOf("/showrunners") >= 0;
    if (!isShowrunner) {
      console.log("signed in – changing CTAs");
      jQuery("#sign-in-nav-link").hide();
      jQuery(".sign-up-btn").hide();
      jQuery(".go-to-desk").show();
      jQuery(".left-hand-cta").hide();
    }
  }

  if (
    !isLoggedIn() &&
    (urlParams.has("sscid") || localStorage.getItem("ssc"))
  ) {
    var s = document.createElement("script");
    s.setAttribute("src", "assets/js/190388a54.js?ver=1.0.0");
    document.head.appendChild(s);
    localStorage.setItem("ssc", 1);
  }

  var addPrefetch = function (url) {
    console.log("prefetching", url);
    var l = document.createElement("link");
    l.setAttribute("rel", "prefetch");
    l.setAttribute("crossorigin", "anonymous");
    l.setAttribute("href", url);
    document.head.appendChild(l);
  };

  var addPrefetches = function (data) {
    addPrefetch(
      "https://scren-pla.vercel.app" + data["/js/compiled/editor.js"]
    );
    addPrefetch(
      "https://scren-pla.vercel.app" + data["/js/compiled/analyzer.js"]
    );
  };

  fetch("https://scren-pla.vercel.app/client_paths")
    .then((response) => response.json())
    .then(addPrefetches);

  var showBanner = function (bannerData) {
    if (bannerData["path"]) {
      document.getElementById("affiliate-title").innerHTML =
        bannerData["name"];
      document.getElementById("affiliate-off-1").innerHTML =
        bannerData["info"]["discount-usd"];
      document.getElementById("affiliate-off-2").innerHTML =
        bannerData["info"]["discount-usd"];
      document.getElementById("affiliate-img").src =
        bannerData["info"]["icon-url"];
      var info = bannerData["info"]["info"];
      if (info) {
        document.getElementById("affiliate-info").innerHTML = info;
      }
      var cta = bannerData["info"]["cta"];
      if (cta) {
        document.querySelector(".affiliate-btn").innerHTML = cta;
      }
      document.getElementById("affiliate-banner").style.display = "flex";
      if (window.plausible)
        window.plausible("SawAffiliateBanner", {
          props: { affiliate: bannerData["path"] },
        });
    }
  };

  if (urlParams.has("via") || urlParams.has("utm_source")) {
    var path = urlParams.get("via") || urlParams.get("utm_source");
    fetch("https://scren-pla.vercel.app/affiliates/" + path).then((res) =>
      res.json().then(showBanner)
    );
  }

  var showReferrerBanner = function (bannerData) {
    if (bannerData["name"]) {
      document.getElementById("affiliate-title").innerHTML =
        bannerData["name"];
      document.getElementById("affiliate-off-1").innerHTML =
        bannerData["info"]["discount-usd"];
      document.getElementById("affiliate-off-2").innerHTML =
        bannerData["info"]["discount-usd"];
      document.getElementById("affiliate-img").src =
        "assets/img/victory.png";
      document.getElementById("affiliate-banner").style.display = "flex";
      if (window.plausible)
        window.plausible("SawAffiliateBanner", {
          props: { affiliate: "referral" },
        });
    }
  };
  if (urlParams.has("friend_of")) {
    var code = urlParams.get("friend_of");
    fetch("https://scren-pla.vercel.app/referrers/" + code).then((res) =>
      res.json().then(showReferrerBanner)
    );
  }

  var signupForm = document.querySelector("#signup-form");
  signupForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var didSubmit = false;
    var doSubmit = function () {
      if (!didSubmit) {
        didSubmit = true;
        signupForm.submit();
      }
    };
    if (window.rdt) {
      window.rdt("track", "Signup");
    }
    setTimeout(doSubmit, 1000);
    window.plausible("Signup", { callback: doSubmit });
  });

  var ps = [
    "via",
    "friend_of",
    "sscid",
    "rdtadid",
    "utm_source",
    "utm_campaign",
    "utm_ad",
  ];
  var activePs = ps.filter(function (p) {
    return urlParams.has(p);
  });
  var hasParams = activePs.length > 0;
  if (isBlog || hasParams) {
    var addVal = function (agg, p) {
      agg[p] = urlParams.get(p);
      return agg;
    };
    var source = activePs.reduce(addVal, {});
    if (isBlog) {
      source["blog"] = true;
      source["utm_source"] ||= "blog";
    }
    jQuery("#source").attr("value", JSON.stringify(source));

    var addQS = function (p) {
      return p + "=" + urlParams.get(p);
    };

    var queryStringAdd;
    if (hasParams) {
      queryStringAdd = activePs.map(addQS).join("&");
    } else {
      queryStringAdd = null;
    }
    if (queryStringAdd) {
      $("a").each(function (i) {
        var link = $(this);
        var href = link.attr("href");
        if (
          href &&
          (href.startsWith("index.html") ||
            href.indexOf("scren-pla.vercel.app") > 0 ||
            href.indexOf("www.arcstudiopro.com") > 0)
        ) {
          var joiner = href.indexOf("?") > 0 ? "&" : "?";
          link.attr("href", href + joiner + queryStringAdd);
        }
      });
    }
  }

  let ebookForm = document.querySelector("#ebook-form");
  if (ebookForm) {
    let source = urlParams.get("via") || urlParams.get("utm_source");
    let campaign = urlParams.get("utm_campaign");
    document.querySelector("#ebook-source").value = source;
    document.querySelector("#ebook-campaign").value = campaign;
    document.querySelector("#ebook-page-path").value =
      window.location.pathname;
    ebookForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
      var didSubmit = false;
      let doSubmit = function () {
        if (!didSubmit) {
          didSubmit = true;
          ebookForm.submit();
        }
      };

      setTimeout(doSubmit, 1000);
      if (window.rdt) {
        window.rdt("track", "Lead");
      }
      l = window.plausible("EbookSubmit", { callback: doSubmit });
    });
  }

  // exit intent modal
  let eimScript = jQuery("#eim");
  if (eimScript) {
    let delay = eimScript.data("force-delay");
    let isActive = eimScript.data("active");
    if (isActive && !isLoggedIn()) {
      console.log("eim setup", delay);
      var didShow = window.localStorage.getItem("__eimf") || false;
      let signupButtons = jQuery(".sign-up-btn");
      let modal = ouibounce(false, {
        aggressive: true, // did not work without this for some reason
        callback: function () {
          console.log("oui");
          if (!didShow) {
            window.localStorage.setItem("__eimf", true);
            didShow = true;
            signupButtons[0].click();
            window.plausible("EIM-fired-exit");
          }
        },
      });

      jQuery(".form-button").on("click", modal.disable());

      if (delay) {
        setTimeout(function () {
          if (!didShow) {
            modal.fire();
            window.plausible("EIM-fired-time");
          }
        }, delay * 1000);
      }
    }
  }
}; // end onReady fn

jQuery(document).ready(onReady);
