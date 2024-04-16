import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export const newExpenseNamePrompt = async () => { // Cambiado el nombre de la función de promptNewUser a newExpenseNamePrompt
    return await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Ingrese nombre del gasto:",
        },
        {
            type: "number",
            name: "amount",
            message: "Ingrese el monto del gasto:",
        },
        {
            type: "date",
            name: "date",
            message: "Ingrese la fecha del gasto:",
            locale: "es-AR",
            format: { month: "short", hour: "numeric", minute: "numeric" },
        },
    ]);
};