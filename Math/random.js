const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(random(1, 10));

let numberThought = Math.round(Math.random() * 10);

let kick = 1;

if (kick === numberThought)
    console.log(`You're right!`);
else
    console.log(`You missed! The number thougth was ${numberThought}`);