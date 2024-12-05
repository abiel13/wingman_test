

declare type tproduct = {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}

export interface Rating {
    rate:  number;
    count: number;
}


declare type tproductStore = {
    products:tproduct[],
    setProducts:(products: tproducts[]) => void,
    filtered:tproduct[],
    setFiltered:(products: tproducts[]) => void,
}