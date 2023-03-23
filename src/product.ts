export class Product {
    productId: string = '';
    priceId: string = '';
    unitDescr: string = '';
    pricePerUnit: number = 0.00;
    quantity: number = 0.00;
    imageUrls: string[] = [];
    type: string = '';
    productName: string = '';
    metadata: {[key: string]: string} = {};
    description: string = '';

    constructor(id: string,
        name: string,
        priceId: string,
        unitDescr: string,
        description: string,
        pricePerUnit: number,
        quantity: number,
        imageUrl: string[],
        type: string,
        metadata: {}) {
        this.productId = id || '';
        this.priceId = priceId || '';
        this.unitDescr = unitDescr || '';
        this.pricePerUnit = pricePerUnit || 0.00;
        this.quantity = quantity || 0.00;
        this.imageUrls = imageUrl || [];
        this.type = type || '';
        this.metadata = metadata || {};
        this.description = description || '';
    }
}