const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findSmallestName(friends) {
    if (friends.length === 0) return null; // If array is empty, return null
    
    let smallest = friends[0]; // Assume the first name is the smallest

    friends.forEach((friend) => {
        if (friend.length < smallest.length) {
            smallest = friend;
        }
    });

    return smallest;
}

const smallestName = findSmallestName(friends);
console.log(smallestName);