export class Hero {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public enemy: string,
        public planet: string,
        public weakness: string,
        public alterEgo?: string

    ) {  }
}
