import { get, save } from "./fileMethods.js";
import inquirer from "inquirer";
import { newExpenseNamePrompt } from "./userPrompts.js";

const main = async () => {
    let run = true;
    while (run) {
        const action = await inquirer.prompt([
            {
                type: "list",
                name: "chosen",
                message: "Elija por favor",
                choices: [
                    { value: 1, name: "Obtener todos los gastos" },
                    { value: 2, name: "Ingresar nuevo gasto" },
                    { value: 3, name: "Salir" }
                ],
            },
        ]);
        switch (action.chosen) {
            case 1:
                await getAllExpenses(); // Cambiado de getAllUsers a getAllExpenses para reflejar la funcionalidad
                break;
            case 2:
                await createNewExpense(); // Cambiado de createNewUser a createNewExpense para reflejar la funcionalidad
                break;
            case 3:
                run = false; // La opción 3 debería salir del bucle, no la 99
                break;
            default:
                run = false;
                break;
        }
    }
    console.log("Adios, muchas gracias por utilizar CashAppTe ®");
};

main();

async function createNewExpense() { // Cambiado el nombre de la función de createNewUser a createNewExpense
    console.log("Agregando nuevo gasto..");
    const newExpenseData = await newExpenseNamePrompt(); // Cambiado de promptNewUser a newExpenseNamePrompt
    console.log("Creando:", newExpenseData);
    const currentExpenses = await get("expenses"); // Cambiado de "users" a "expenses" para reflejar la funcionalidad

    currentExpenses.push(newExpenseData);
    await save("expenses", currentExpenses); // Cambiado de "users" a "expenses" para reflejar la funcionalidad
}

async function getAllExpenses() { // Cambiado el nombre de la función de getAllUsers a getAllExpenses
    const currentExpenses = await get("expenses"); // Cambiado de "users" a "expenses" para reflejar la funcionalidad
    console.log(currentExpenses);
}