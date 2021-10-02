#include <iostream>

int count(int n) {
    if (n < 2 || n > 20000)
        return (-1);
    return (n*(n-1)/2);
}

int main(int argc, char **argv){
    if (argc < 2){
        std::cout << "How to use: ./a.out n" << std::endl;
        return (-1);
    }
    if (argv[1][0] == 'h') {
        std::cout << "How to use: ./a.out n" << std::endl;
        return (0);
    }
    std::cout << count(atoi(argv[1])) << std::endl;
    return (0);
}
