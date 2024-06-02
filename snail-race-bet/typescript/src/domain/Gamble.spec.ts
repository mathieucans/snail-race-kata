function getWinners(date: number) {

}

class GetWinnersUsecease {
    async getWinners(number: number) {
        return new Winners([])
    }
}

class Winners {
    constructor(winners: string[]) {

    }

}

describe('Gamble', () => {
    it('should not when no Bet is placed', async () => {
        const winnersUseCase = new GetWinnersUsecease()
        const result = await winnersUseCase.getWinners(Date.parse("2021-01-01T00:00:00Z"))
        expect(result).toEqual(new Winners([]))
    });

    it('should win when the podium exactly matches the bet', () => {
        const winnersUseCase = new GetWinnersUsecease

    });
});