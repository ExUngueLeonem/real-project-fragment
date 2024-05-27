import React, { ComponentProps } from "react";
import { AsyncSelect, GroupBase, Select } from "chakra-react-select";
import { SystemStyleObject } from "@chakra-ui/react";

//костыль, потому, что я не могу стилизовать control
//времени потратил много, перепробовал уже наверное все
import "./baseSelect.css";

// interface IProps<T> extends ComponentProps<typeof Select<T, boolean, GroupBase<T>>> {
//   isHideArrow?: boolean,
//   additionalChakraStyles?: { [key: string]: (arg: SystemStyleObject) => SystemStyleObject }
// }
//
// interface IAsyncProps<T> extends ComponentProps<typeof AsyncSelect<T, boolean, GroupBase<T>>> {
//   isHideArrow?: boolean,
//   additionalChakraStyles?: { [key: string]: (arg: SystemStyleObject) => SystemStyleObject }
// }


interface IProps<T> extends ComponentProps<typeof Select<T, boolean, GroupBase<T>>> {
  isHideArrow?: boolean,
  additionalChakraStyles?: { [key: string]: (arg: SystemStyleObject) => SystemStyleObject }
}

interface IAsyncProps<T> extends ComponentProps<typeof AsyncSelect<T, boolean, GroupBase<T>>> {
  isHideArrow?: boolean,
  additionalChakraStyles?: { [key: string]: (arg: SystemStyleObject) => SystemStyleObject }
}

// SelectProps<
// Option = unknown,
//   IsMulti extends boolean = false,
//   Group extends GroupBase<Option> = GroupBase<Option>
//   >

//
// clearIndicator - Box (uses theme styles for Chakra's CloseButton)
// container - Box
// control - Box (uses theme styles for Chakra's Input)
// dropdownIndicator - Box (uses theme styles for Chrakra's InputRightAddon)
// downChevron - Icon
// crossIcon - Icon
// group - Box
// groupHeading - Box (uses theme styles for Chakra's Menu group title)
// indicatorsContainer - Box
// indicatorSeparator - Divider
// input - chakra.input (wrapped in a Box)
// inputContainer - Box
// loadingIndicator - Spinner
// loadingMessage - Box
// menu - Box
// menuList - Box (uses theme styles for Chakra's Menu)
// multiValue - chakra.span (uses theme styles for Chakra's Tag)
// multiValueLabel - chakra.span (uses theme styles for Chakra's TagLabel)
// multiValueRemove - Box (uses theme styles for Chakra's TagCloseButton)
// noOptionsMessage - Box
// option - Box (uses theme styles for Chakra's MenuItem)
// placeholder - Box
// singleValue - Box
// valueContainer - Box

const chakraStyles =
  {
    control: (provided: SystemStyleObject) => ({
      ...provided,
      alignItems: "center",
      p: 0,
      m: 0,
      height: "30px !important",
      backgroundColor: "green",
    }),
    noOptionsMessage: (provided: SystemStyleObject) => ({
      ...provided,
      fontSize: "1rem",
    }),
    menu: (provided: SystemStyleObject) => ({
      ...provided,
      fontSize: "1rem",
      zIndex: 1,
    }),
    option: (provided: SystemStyleObject) => ({
      ...provided,
      fontSize: "1rem",
      _selected: {
        backgroundColor: "primary_th_bg",
      }
    }),
    valueContainer: (provided: SystemStyleObject) => ({
      ...provided,
      p: 0,
      pl: "5px",
      pr: "0",
      w: "50px",
    }),
    dropdownIndicator: (provided: object) => ({
      ...provided,
      h: "10px"
    }),
  };

// function CustomSelect<
//   Option,
//   IsMulti extends boolean = false,
//   Group extends GroupBase<Option> = GroupBase<Option>
// >(props: Props<Option, IsMulti, Group>) {
//   return (
//     <Select {...props} theme={(theme) => ({ ...theme, borderRadius: 0 })} />
//   );
// }

const hideArrowStyle = { dropdownIndicator: (provided: object) => ({ ...provided, display: "none" }) };

export const BaseSelect = <T, >(
  {
    isHideArrow = false,
    additionalChakraStyles,
    ...props
  }: IProps<T>) => {
  const hideArrow = isHideArrow ? hideArrowStyle : {}
  return (
    <Select
      chakraStyles={{
        ...chakraStyles,
        ...additionalChakraStyles,
        ...hideArrow,
      }}
      variant={"primary"}
      useBasicStyles
      placeholder={"Выбрать"}
      {...props}

      classNamePrefix="base_select"
    />
  );
}

export const AsyncBaseSelect = <T, >(
  {
    isHideArrow = false,
    additionalChakraStyles,
    ...props
  }: IAsyncProps<T>) => {

  const hideArrow = isHideArrow ? hideArrowStyle : {}

  return (
    <AsyncSelect
      chakraStyles={{
        ...chakraStyles,
        ...additionalChakraStyles,
        ...hideArrow,
      }}
      variant={"primary"}
      useBasicStyles
      placeholder={"Выбрать"}
      {...props}

      classNamePrefix="base_select"
    />
  );
}