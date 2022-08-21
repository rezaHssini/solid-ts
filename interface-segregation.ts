//Many client-specific interfaces are better than one general-purpose interface.

//Bad way
interface Character {
  shoot(): void;
  swim(): void;
  talk(): void;
  dance(): void;
}

class Troll implements Character {
  shoot(): void {
    // some method
  }

  swim(): void {
    // a troll can't swim
  }

  talk(): void {
    // a troll can't talk
  }

  dance(): void {
    // some method
  }
}

//Good way
interface Talker {
  talk(): void;
}

interface Shooter {
  shoot(): void;
}

interface Swimmer {
  swim(): void;
}

interface Dancer {
  dance(): void;
}

class Troll implements Shooter, Dancer {
  public shoot(): void {
    // some method
  }

  public dance(): void {
    // some method
  }
}
