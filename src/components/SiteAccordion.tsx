import {
  Accordion,
  AccordionItem,
  Stack,
  AccordionButton,
  Icon,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { Site } from "models/__generated__/netboxAPI";
import React from "react";
import { FiMap, FiMapPin } from "react-icons/fi";
import NavItem from "./NavItem";

type SiteAccordionProps = {
  sites: Site[];
  hoverColor?: string;
};

const SiteAccordion: React.FC<SiteAccordionProps> = ({ sites, hoverColor }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        <Stack
          borderRadius="lg"
          spacing="0"
          _hover={
            hoverColor && {
              bg: hoverColor,
            }
          }
          align="center"
          direction="row"
          mt="1"
          mx="4"
          p="4"
        >
          <AccordionButton p="0">
            <Icon mr="4" fontSize="16" as={FiMap} />
            <Box flex="1" textAlign="left">
              Sites
            </Box>

            <AccordionIcon />
          </AccordionButton>
        </Stack>

        <AccordionPanel pt="0" mt="0" pr="0">
          {sites?.map((site) => (
            <NavItem
              key={site.slug}
              icon={FiMapPin}
              link={`/sites/${site.slug}`}
            >
              {site.display}
            </NavItem>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SiteAccordion;
