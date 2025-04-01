import React from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Paper,
} from "@mui/material";
import { ChannelType } from "../../types";

interface ChannelSelectionProps {
  selectedChannels: ChannelType[];
  onChannelToggle: (channel: ChannelType) => void;
}

const ChannelSelection: React.FC<ChannelSelectionProps> = ({
  selectedChannels,
  onChannelToggle,
}) => {
  return (
    <div>
      <Typography variant="h6" className="mb-4">
        Seleccione los canales de envío
      </Typography>

      <Paper variant="outlined" className="p-4">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedChannels.includes("sms")}
                onChange={() => onChannelToggle("sms")}
              />
            }
            label="SMS"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedChannels.includes("correo")}
                onChange={() => onChannelToggle("correo")}
              />
            }
            label="Correo electrónico"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedChannels.includes("whatsapp")}
                onChange={() => onChannelToggle("whatsapp")}
              />
            }
            label="WhatsApp"
          />
        </FormGroup>
      </Paper>
    </div>
  );
};

export default ChannelSelection;
