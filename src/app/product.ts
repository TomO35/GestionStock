export class Product{

    nom: string;
    fournisseur: string;
    emailFournisseur: string;
    ingredients: string[];
    description: string;
    age: number;
    conditionConservation: string;
    prix: number;

    constructor(nom, fournisseur, emailFournisseur, ingredients, description, age, conditionConservation, prix){
        this.nom= nom;
        this.fournisseur= fournisseur;
        this.emailFournisseur= emailFournisseur;
        this.ingredients= ingredients;
        this.description= description;
        this.age= age;
        this.conditionConservation= conditionConservation;
        this.prix= prix;
    }
}

const prod1 = new Product("Coca", "Coca-cola", "coca@cola.com", ["eau", "caramel", "conservateurs", "ingrédients secret"], "Une boisson pour se raffraichir surtout en été.", 2, "Garder au frais maximum trois jours après ouverture.", 2.50);
const prod2 = new Product("Chocolat", "Côte d'or", "cote@dor.com", ["cacao", "lait", "conservateurs"], "Un met délicieux pour faire plaisir à tous.", 5, "Se conserve longtemps. Ne pas dépasser les 20 degrés.", 5);
const prod3 = new Product("Courgette", "CourgeCompany", "courge@company.com", ["courgette, terreau"], "Un légume que moi je n'aime pas, mais alors pas du tout.", 1, "A consommer avant 2 jours.", 1000);
const prod4 = new Product("Compote", "Compomme", "compote@pomme.com", ["eau", "pomme", "conservateurs", "additifs", "lombric"], "Dessert soi-disant sain mais pour les pauvres, souvent vendu en lot.", 3, "Garder au frais maximum trois jours après ouverture.", 2);
const prod5 = new Product("Chorizo", "Chocho le rizo", "cho@rizo.com", ["gras", "graisse", "epices", "encore plus de gras"], "Mets prévu pour l'apéritif, ou alors quand on a un creux...", 50, "Aucune condition particulière de conservation.", 1.50);

export const PRODUITS = [prod1, prod2, prod3, prod4, prod5];