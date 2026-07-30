# Certo2

## Stack

### Frontend:

        Next.js
        TypeScript
        Tailwind CSS
        TanStack Query
        Zustand
        React Hook Form
        Zod
        Axios

### Backend:

        Node.js
        Express
        TypeScript
        Prisma ORM
        PostgreSQL
        JWT
        bcrypt

    Repository Pattern + Dependency Injection + Generic Base Repository + Type-safe Profiles (Prisma)

### Storage:

        Cloudinary

### Reports:

        pdf-lib
        ExcelJS

## Arquitectura

    Frontend (Next)  ->    Interfaz de usuario y llamadas a la API.
        ↓
    Infrastructure   ->    HTTP / Controllers (Adaptador de Entrada)
        ↓
    Application      ->    Use Cases / Services (Lógica de Aplicación)
        ↓
    Domain           ->    Entities & Repositories (Núcleo del Negocio)
        ↓
    Infrastructure   ->    Database / Prisma (Adaptador de Salida)
        ↓
    PostgreSQL       ->    Almacena y recupera los datos de forma persistente.

El orden exacto de los primeros pasos es este:

1- Entidad de Dominio (src/domain/entities/): Defines cómo es tu objeto de negocio y sus reglas puras.

2- Repositorio de Dominio / Interfaz (src/domain/repositories/): Aquí es donde se hace. Creas la interfaz (ej. user.repository.ts) diciendo: "Necesito un contrato que me permita guardar y buscar usuarios". Lo haces en este momento porque los Casos de Uso de la siguiente capa van a necesitar importar y usar este contrato.

3- Caso de Uso (src/application/useCases/): Escribes la lógica de la aplicación usando esa interfaz del dominio, sin preocuparte por Prisma todavía.

4- Implementación del Repositorio (src/interfaces/database/repositories/): Lo haces al final, cuando ya tienes listo el caso de uso y los esquemas de Prisma, creando la clase real que implementa esa interfaz con código de base de datos.
