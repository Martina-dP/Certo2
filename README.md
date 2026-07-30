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
