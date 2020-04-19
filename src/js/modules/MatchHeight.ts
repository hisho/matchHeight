function _MatchHeight() {
  const targetElements: HTMLElement[] = [...document.querySelectorAll<HTMLElement>('[data-match-height]')];
  if (targetElements) matchHeight(targetElements);
}

function matchHeight(targetElements) {
  const dataNames: string[] = targetElements.map(x => x.dataset.matchHeight);
  const dataNameList: string[] = [...new Set(dataNames)];
  const matchHeightElements: HTMLElement[][] = dataNameList.map(dataName => {
    return targetElements.filter(targetElement => {
      const data:string = targetElement.dataset.matchHeight;
      if (data === dataName) return targetElement;
    });
  });
  matchHeightElements.forEach(matchHeightElement => {
    const heights:number[] = matchHeightElement.map(x => x.clientHeight);
    const maxHeight:number = Math.max(...heights);
    matchHeightElement.forEach(x => {
      console.log(x.offsetTop);
      (x.style.height = `${maxHeight}px`)
    });
  });
}

_MatchHeight();