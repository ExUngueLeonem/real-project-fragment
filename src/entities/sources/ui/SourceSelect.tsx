import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { createFilter, MultiValue, OptionBase } from "chakra-react-select";
import { Box, Button, Center, FormControl, Grid, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "shared/model";
import { appSettings } from "shared/lib";
import { BaseSelect, CProgress } from "shared/ui";
import { ISource, SourcesActions, useGetSources } from "entities/sources";
import { useFormContext } from "react-hook-form";

interface ISourceOption extends OptionBase {
  label: string;
  value: string;
}

function convertToOption(source: ISource): ISourceOption {
  return {
    label: source.name,
    value: source.id,
  };
}

export function SourceSelect() {
  const sourceId = useAppSelector(state => state.sources.current);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formContext = useFormContext();
  const { data: sources, isLoading } = useGetSources();

  const setSourceId = useCallback((option?: ISourceOption | MultiValue<ISourceOption>) => {
      if (!option) return
      const { value } = option as ISourceOption;
      dispatch(SourcesActions.setSelect(value));
      formContext?.reset();
    }, [dispatch, formContext]
  );

  const filteredSources = useMemo(() => sources?.filter(({ type }) => appSettings.source.get(type)?.canUploadToSource), [sources])
  const options = useMemo(() => filteredSources?.map(convertToOption) ?? [], [filteredSources]);
  const value = useMemo(() => options.find(item => item.value === sourceId), [options, sourceId]);
  const filter = useMemo(() => createFilter({ ignoreAccents: true }), [])

  if (isLoading) return <Center h={"30px"}><Box h={"10px"} w={"250px"}><CProgress /></Box></Center>

  return (
    <FormControl w={"15vw"}>
      <InputGroup variant={"primary"}>
        {filteredSources?.length === 0 ?
          <Button
            pr={5}
            backgroundColor={"error"}
            onClick={() => navigate("/sources")}
          >
            создайте IIKO источник
          </Button>
          :
          <>
            <Grid gridTemplateColumns={"auto 1fr"} w={"full"}>
              <InputLeftAddon textTransform={"capitalize"}> Назначение: </InputLeftAddon>

              <BaseSelect<ISourceOption>
                additionalChakraStyles={{ control: (provided) => ({ ...provided, borderRadius: "0 5px 5px 0" }) }}
                value={value || null}
                options={options}
                isReadOnly={isLoading}
                filterOption={filter}
                noOptionsMessage={() => <Text>Нет элементов</Text>}
                menuPlacement={"auto"}
                onChange={(option) => option && setSourceId(option)}
                menuPosition={"fixed"}
              />
            </Grid>
          </>

        }
      </InputGroup>
    </FormControl>
  );
}