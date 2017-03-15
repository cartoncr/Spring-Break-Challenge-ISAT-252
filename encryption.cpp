#include <iostream>
#include <string>
#include <cctype>

int main() {
//remove punctuation from string
    std::string phrase = "We must let go of the life we have planned, so as to accept the one that is waiting for us.";

    for (int i = 0, len = phrase.size(); i < len; i++)
    {
        if (ispunct(phrase[i]))
        {
            phrase.erase(i--, 1);
            len = phrase.size();
        }
    }

    std::cout << phrase;
    return 0;
}
