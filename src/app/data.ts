// src/app/virtual-scroll-table/data.ts
export interface TableRow {
    id: number;
    name: string;
    age: number;
    city: string;
    [key: string]: string | number;
}

export type TableColumn = keyof TableRow; // Define a type for table columns

export const TABLE_DATA: TableRow[] = Array.from({ length: 1000 }).map((_, i) => ({
    id: i + 1,
    name: `Name ${i + 1}`,
    age: getRandomAge(),
    city: `City ${i + 1}`,
}));

function getRandomAge(): number {
    return Math.floor(Math.random() * 60) + 18; // Generates random age between 18 and 77
}

