const sortArr = (a, b) => {
    if (a[1] > b[1]) return 1;
    
    if (a[1] < b[1]) return -1;

    return 0;
}