/**
 * Write a function that takes an array of employees and returns the names
 * of employees that earn more than the average. Use Array.prototype.filter.
 *
 * Each employee is an object in the following form:
 * ```
 * {
 *   firstName: string,
 *   lastName: string,
 *   salary: number,
 * }
 * ```
 *
 * Example:
 * ```
 * Input = [
 *   { firstName: 'Tom', lastName: 'Poor', salary: 2000 },
 *   { firstName: 'Lilly', lastName: 'Beggar', salary: 3000 },
 *   { firstName: 'Jane', lastName: 'Wealthy', salary: 4000 },
 *   { firstName: 'Dick', lastName: 'Rich', salary: 5000 },
 * ]
 * Output = ['Jane Wealthy', 'Dick Rich']
 * ```
 */
export function getHighEarners (employees) {
    const avg = employees.reduce((total, employee, index, array) => {
        total += employee.salary;
        if (index === array.length -1) return total / array.length;
        return total;
    }, 0);

    return employees.filter(employee => employee.salary > avg).map(employee => `${employee.firstName} ${employee.lastName}`)
}
