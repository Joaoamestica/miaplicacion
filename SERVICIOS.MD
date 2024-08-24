# Servicios

## Listar productos

__Descripción__: Obtiene una lista de productos. <br>
__Ruta__: `src/interfaces/IListProductsRequestDTO.ts` <br>
__Url__: https://github.com/Joaoamestica/ayudantia/blob/main/script.js <br>

### RequestDTO

```typescript
interface IListProductsRequestDTO {
    page: number;
    limit: number;
}
```

### ResponseDTO

```typescript
interface IListProductsResponseDTO {
    total: number;
    products: ProductDTO[]
}

interface ProductDTO{
    id: number;
    name: string;
    price: number;
}
```
