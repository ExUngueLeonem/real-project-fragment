import { useDisclosure } from "@chakra-ui/react";
import { ISource } from "entities/sources";

export interface ISourcesContext {
  selectedSource?: ISource;
  sourceModal: ReturnType<typeof useDisclosure>;
  onOpenSourceForm: (source?: ISource) => void;
  deleteModal: ReturnType<typeof useDisclosure>;
  onOpenDeleteModal: (source: ISource) => void;
  fetchSourceModal: ReturnType<typeof useDisclosure>;
  onOpenFetchModal: (source: ISource) => void;
}