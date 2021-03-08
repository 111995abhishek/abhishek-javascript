function lotteryTicket(ticketnum){
    return ticketnum%4 === 0 ? 6 : ticketnum%7 === 0 ? 10 : (ticketnum%4 === 0 && ticketnum%7 === 0) ? 20: 0;

}

console.log(lotteryTicket(28));