//Depend upon abstractions, [not] concretions.

//Bad way
class FrontendDeveloper {
  public writeHtmlCode(): void {
    // some method
  }
}

class BackendDeveloper {
  public writeTypeScriptCode(): void {
    // some method
  }
}

class SoftwareProject {
  public frontendDeveloper: FrontendDeveloper;
  public backendDeveloper: BackendDeveloper;

  constructor() {
    this.frontendDeveloper = new FrontendDeveloper();
    this.backendDeveloper = new BackendDeveloper();
  }

  public createProject(): void {
    this.frontendDeveloper.writeHtmlCode();
    this.backendDeveloper.writeTypeScriptCode();
  }
}

//Good way
interface Developer {
  develop(): void;
}

class FrontendDeveloper implements Developer {
  develop(): void {
    this.writeHtmlCode();
  }

  private writeHtmlCode(): void {
    // some method
  }
}

class BackendDeveloper implements Developer {
  public develop(): void {
    this.writeTypeScriptCode();
  }

  private writeTypeScriptCode(): void {
    // some method
  }
}

class SoftwareProject {
  developers: Developer[];

  createProject(): void {
    this.developers.forEach((developer: Developer) => {
      developer.develop();
    });
  }
}
