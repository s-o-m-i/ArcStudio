// ReusableModal.js

import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";

const ReusableModal = ({ open, onClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box>
        {children}
      </Box>
    </Modal>
  );
};

ReusableModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ReusableModal;
