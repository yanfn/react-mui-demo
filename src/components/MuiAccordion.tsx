import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="subtitle1">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            tenetur assumenda beatae voluptatem quisquam adipisci quidem quis,
            perspiciatis itaque eos neque eveniet minima, cupiditate molestias?
            Sequi enim provident commodi blanditiis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="subtitle1">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            tenetur assumenda beatae voluptatem quisquam adipisci quidem quis,
            perspiciatis itaque eos neque eveniet minima, cupiditate molestias?
            Sequi enim provident commodi blanditiis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="subtitle1">Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            tenetur assumenda beatae voluptatem quisquam adipisci quidem quis,
            perspiciatis itaque eos neque eveniet minima, cupiditate molestias?
            Sequi enim provident commodi blanditiis.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
