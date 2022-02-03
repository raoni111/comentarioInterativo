const Utils = {
  validLength(name: string): boolean {
    return name.length < 8 ? false : true;
  },
  validPassword<T = string>(password: T, passwordTwo: T): boolean {
    return password === passwordTwo;
  },
  displayError(error: string, element: HTMLInputElement): void {
    const p = document.createElement('p');
    const parentElement = element.parentElement as HTMLDivElement;
    const parentTwo = parentElement.parentElement as HTMLDivElement;
    const verifyErrorELement = document.getElementById('error');
    if (document.body.contains(verifyErrorELement)) {
      return;
    }
    p.classList.add('error');
    p.id = 'error';
    p.textContent = error;
    parentTwo.appendChild(p);

    setTimeout(() => {
      parentTwo.removeChild(p);
    }, 2000);
  },
};

export default Utils;
