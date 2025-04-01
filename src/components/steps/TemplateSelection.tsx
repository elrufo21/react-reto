import React from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Paper,
} from "@mui/material";
import { TemplateType } from "../../types";

interface TemplateSelectionProps {
  selectedTemplate: TemplateType;
  onTemplateChange: (template: TemplateType) => void;
}

const TemplateSelection: React.FC<TemplateSelectionProps> = ({
  selectedTemplate,
  onTemplateChange,
}) => {
  return (
    <div>
      <Typography variant="h6" className="mb-4">
        Seleccione el tipo de plantilla para su mensaje
      </Typography>

      <Paper variant="outlined" className="p-4">
        <FormControl component="fieldset">
          <RadioGroup
            value={selectedTemplate}
            onChange={(e) => onTemplateChange(e.target.value as TemplateType)}
          >
            <FormControlLabel
              value="invitacion"
              control={<Radio />}
              label="Invitación"
            />
            <FormControlLabel
              value="recordatorio"
              control={<Radio />}
              label="Recordatorio"
            />
            <FormControlLabel
              value="personalizado"
              control={<Radio />}
              label="Personalizado"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </div>
  );
};

export default TemplateSelection;
