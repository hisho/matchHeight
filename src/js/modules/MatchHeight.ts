/* TODO

入れ子状態でも動くようにする(優先度低)
リサイズイベントに対応できるようにする。
byRow: true,
property: 'height',
target: null,
のオプションを用意する
*/

class MatchHeight {
  matchHeightElements: HTMLElement[]
  matchHeightElementDataNameList: string[]
  matchHeightDataElementsList: HTMLElement[][]
  constructor() {
    this.matchHeightElements = [...document.querySelectorAll<HTMLElement>('[data-match-height]')];
    this.matchHeightElementDataNameList = this.getElementMatchList(this.matchHeightElements,el => el.dataset.matchHeight);
    this.matchHeightDataElementsList = this.makeSortElementsLists(this.matchHeightElementDataNameList,this.matchHeightElements, el => el.dataset.matchHeight);
    this.init();
  }

  init() {
    this.matchHeightDataElementsList.forEach(matchHeightDataElements => {
      const elementHeightLists = matchHeightDataElements.map(x => x.offsetTop);
      const elementHeightList = this.makeSortElementsLists(elementHeightLists,matchHeightDataElements,el => el.offsetTop);
      elementHeightList.forEach(x => this.setMaxHeight(x,this.getMaxHeight(x)));
    });
  }

  getElementMatchList (elements,func):any[] {
    const elementMatchList = elements.map(x => func(x));
    return [...new Set(elementMatchList)]
  }

  makeSortElementsLists (array,elements:HTMLElement[],func):HTMLElement[][] {
    return array.map(item => {
      return elements.filter(element => {
        if (func(element) === item) return element;
      });
    });
  }

  getMaxHeight(elements: HTMLElement[]):number {
    const heights:number[] = elements.map(x => x.clientHeight);
    return Math.max(...heights);
  }

  setMaxHeight(elements: HTMLElement[],maxHeight:number) {
    elements.forEach(element => element.style.height = `${maxHeight}px`)
  }
}

if(document.querySelector<HTMLElement>('[data-match-height]')) new MatchHeight();