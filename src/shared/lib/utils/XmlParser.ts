export class XmlParser {
  private readonly evaluator: XPathEvaluator;
  private readonly resolver: XPathNSResolver;
  private readonly document: Document;

  constructor(xml: string) {
    this.evaluator = new XPathEvaluator();
    this.document = new DOMParser().parseFromString(xml, "application/xml");
    this.resolver = this.evaluator.createNSResolver(
      this.document.documentElement
    );

    if (!this.document) {
      throw new Error("Document not loaded");
    }
  }

  getElementsByPath(path: string) {
    const results = [];
    const query = this.document.evaluate(
      path,
      this.document.documentElement,
      this.resolver,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    );

    for (let i = 0, length = query.snapshotLength; i < length; ++i) {
      results.push(query.snapshotItem(i));
    }

    return results;
  }

  getElementValueByPath(path: string, parent?: Node | null) {
    return (
      this.document
        .evaluate(
          path,
          parent ?? this.document.documentElement,
          this.resolver,
          XPathResult.ANY_TYPE,
          null
        )
        .iterateNext()?.textContent ?? undefined
    );
  }
}
