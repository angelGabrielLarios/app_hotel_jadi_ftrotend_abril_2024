// Function to calculate the difference in days between two dates

export function diffDateDays({ initialDate, endDate }: { initialDate: string, endDate: string }): number {

    const objInitialDate = new Date(`${initialDate}T00:00:00Z`)

    const objEndDate = new Date(`${endDate}T00:00:00Z`)

    const differenceInMilliseconds = objEndDate.getTime() - objInitialDate.getTime();

    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    return differenceInDays;
}

