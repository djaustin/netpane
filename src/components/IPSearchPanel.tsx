import { Accordion, AccordionItem, AccordionButton, HStack, Heading, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { IPResult } from "models/IPResult";
import React from "react";
import IPTable from "./IPTable";

export type IPSearchPanelProps = {
    addresses: IPResult[]
}

const IPSearchPanel: React.FC<IPSearchPanelProps> = ({addresses}) => <Accordion
defaultIndex={addresses.map((_, i) => i)}
allowMultiple
>
{addresses
  .sort((a, b) => (a.site.display < b.site.display ? -1 : 1))
  .map((result) => {
    return (
      <AccordionItem key={result.site.id}>
        <AccordionButton>
          <HStack w="full" justify="space-between">
            <Heading size="md">{`${result.site.display} (${result.results.length})`}</Heading>
            <AccordionIcon />
          </HStack>
        </AccordionButton>
        <AccordionPanel pt={0}>
          <IPTable pb={10} addresses={result.results} />
        </AccordionPanel>
      </AccordionItem>
    );
  })}
</Accordion>

export default IPSearchPanel;