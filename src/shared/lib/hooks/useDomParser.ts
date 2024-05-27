import { useCallback, useMemo } from "react";

export function useDomParser(xml: string) {
  const evaluator = useMemo(() => new XPathEvaluator(), []);
  const document = useMemo(
    () => new DOMParser().parseFromString(xml, "application/xml"),
    [xml]
  );
  const resolver = useMemo(
    () => evaluator.createNSResolver(document.documentElement),
    [document.documentElement, evaluator]
  );

  const getElementsByPath = useCallback(
    (path: string) => {
      const results = [];
      const query = document.evaluate(
        path,
        document.documentElement,
        resolver,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
      );

      for (let i = 0, length = query.snapshotLength; i < length; ++i) {
        results.push(query.snapshotItem(i));
      }

      return results;
    },
    [document, resolver]
  );

  const getElementValueByPath = useCallback(
    (path: string, parent?: Node | null) => {
      return (
        document
          .evaluate(
            path,
            parent ?? document.documentElement,
            resolver,
            XPathResult.ANY_TYPE,
            null
          )
          .iterateNext()?.textContent ?? undefined
      );
    },
    [document, resolver]
  );

  return { getElementsByPath, getElementValueByPath };
}
