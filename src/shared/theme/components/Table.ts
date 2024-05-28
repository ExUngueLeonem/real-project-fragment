import { defineStyleConfig } from "@chakra-ui/react";

const tableStyle = {
  table: {
    // //base
    fontFamily: "'Roboto Mono Variable', sans-serif",
    fontSize: "sm",
    backgroundColor: "primary_bg",

    //border
    borderCollapse: "separate",
    borderSpacing: "0",
  },
  thead: {
    //base
    fontFamily: "'Roboto Mono Variable', sans-serif",
    fontSize: "sm",
    backgroundColor: "main_bg",

    //border
    borderRadius: "0 0 5px 5px",
    overflow: "hidden",
    tr: {
      _first: {
        th: {
          overflow: "hidden",
          _after: {
            content: "''",
            position: "absolute", top: 0, left: 0,
            w: "3px", h: "3px",
            backgroundColor: "main_bg",
            zIndex: -1,
            clipPath: "polygon(0 0, 0% 100%, 100% 0)",
          },
          _before: {
            content: "''",
            position: "absolute", top: 0, right: 0,
            w: "3px", h: "3px",
            backgroundColor: "main_bg",
            zIndex: -1,
            clipPath: "polygon(0 0, 100% 95%, 100% 0)",
          },
          _first: {
            borderTopLeftRadius: "5px",
          },
          _last: {
            borderTopRightRadius: "5px",
          },
        }
      },

    },

  },
  tfoot: {
    backgroundColor: "main_bg",
    tr: {
      _last: {
        th: {
          overflow: "hidden",
          _after: {
            content: "''",
            position: "absolute", bottom: 0, left: 0,
            w: "3px", h: "3px",
            backgroundColor: "main_bg",
            zIndex: -1,
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
          },
          _before: {
            content: "''",
            position: "absolute", bottom: 0, right: 0,
            w: "3px", h: "3px",
            backgroundColor: "main_bg",
            zIndex: -1,
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          },
          _first: {
            borderBottomLeftRadius: "5px",
            borderBottom: "1px",
            borderColor: "inherit",
          },
          _last: {
            borderBottomRightRadius: "5px",
            borderBottom: "1px",
            borderColor: "inherit",
          },
        }
      },
    },
  },
  tr: {
    //base
    fontWeight: "normal",
    transition: "all 0.1s",
  },
  th: {
    //base
    p: "13px 10px 13px 10px",
    minH: "40px",
    cursor: "pointer",
    backgroundColor: "primary_th_bg",
    fontWeight: "normal",
    textTransform: "none",

    //border
    borderTop: "1px",
    borderRight: "1px",
    borderColor: "inherit",
    _first: {
      borderLeft: "1px",
      borderColor: "inherit",
    },
  },
  td: {
    //base
    p: "15px 10px 15px 10px",
    fontWeight: "bold",

    wordWrap: "break-word",
    whiteSpace: "normal",

    //border
    borderTop: "1px",
    borderRight: "1px",
    borderColor: "primary_th_border",
    _first: {
      borderLeft: "1px",
      borderColor: "inherit",
    },
  }
}

export const tableTheme = defineStyleConfig(
  {
    variants: {
      primary: {
        ...tableStyle
      },
      "primary_nonRoundedTop": {
        ...tableStyle,
        table: {
          ...tableStyle.table,
          borderRadius: "0"
        },
        th: {
          _first: {
            borderRadius: "0"
          },
        },
      }
    },
    defaultProps: {
      variant: "primary"
    }
  },
)