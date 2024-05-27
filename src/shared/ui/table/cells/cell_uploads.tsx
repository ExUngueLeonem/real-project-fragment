import { Center, Icon, Spinner, Tooltip } from "@chakra-ui/react";

import { useAppSelector } from "shared/model";
import { BsCheck2, BsCheck2All } from "react-icons/bs";

interface IProps {
  isLoading: boolean;
  isCompleted: boolean;
  isUploads: boolean;
}

/*компонент - ячейка таблицы. показывает статусы документа*/
export const CellUploads = ({ isLoading, isCompleted, isUploads }: IProps) => {
  const selectedSourceId = useAppSelector(state => state.sources.current)
  if (isLoading) {
    return <Center h={"1px"}><Spinner color={"primary_btn"} /></Center>;
  }
  if (!selectedSourceId) return <></>
  if (isUploads) {
    return (
      <Tooltip label='Выгружено' fontSize={"xs"}>
        <Center h={"10px"}>
          <Icon as={BsCheck2All} boxSize={"25px"} />
        </Center>
      </Tooltip>
    );
  }
  if (isCompleted) {
    return (
      <Tooltip label='Сопоставлено' fontSize={"xs"}>
        <Center h={"10px"}>
          <Icon as={BsCheck2} boxSize={"25px"} />
        </Center>
      </Tooltip>
    );
  }
  return <></>;
};