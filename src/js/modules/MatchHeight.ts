class MatchHeight {
  matchHeightElements: HTMLElement[]
  matchHeightElementDataNameList: string[]
  matchHeightDataElements: HTMLElement[][]
  constructor() {
    this.matchHeightElements = [...document.querySelectorAll<HTMLElement>('[data-match-height]')];
    this.matchHeightElementDataNameList = this.getElementDataNameList();
    this.matchHeightDataElements = this.test();
    this.init();
  }

  init() {
    this.matchHeightDataElements.forEach(matchHeightElement => {
      const heights:number[] = matchHeightElement.map(x => x.clientHeight);
      const maxHeight:number = Math.max(...heights);
      matchHeightElement.forEach(x => {
        console.log(x.offsetTop);
        (x.style.height = `${maxHeight}px`)
      });
    });
  }

  getElementDataNameList ():string[] {
    const matchHeightElementDataNames = this.matchHeightElements.map(x => x.dataset.matchHeight);
    return [...new Set(matchHeightElementDataNames)]
  }

  test():HTMLElement[][] {
    return this.matchHeightElementDataNameList.map(dataName => {
      return this.matchHeightElements.filter(targetElement => {
        const data:string = targetElement.dataset.matchHeight;
        if (data === dataName) return targetElement;
      });
    });
  }
}

if(document.querySelector<HTMLElement>('[data-match-height]')) new MatchHeight();