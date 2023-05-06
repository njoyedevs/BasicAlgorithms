class VanEmdeBoas {
    constructor(size) {
        this.universe_size = size;
        this.minimum = -1;
        this.maximum = -1;

        if (size <= 2) {
            this.summary = null;
            this.clusters = Array(0).fill(null);
        } else {
            const no_clusters = Math.ceil(Math.sqrt(size));

            this.summary = new VanEmdeBoas(no_clusters);
            this.clusters = Array(no_clusters).fill(null);

            for (let i = 0; i < no_clusters; i++) {
                this.clusters[i] = new VanEmdeBoas(Math.ceil(Math.sqrt(size)));
            }
        }
    }

    high(x) {
        const div = Math.ceil(Math.sqrt(this.universe_size));
        return Math.floor(x / div);
    }

    low(x) {
        const mod = Math.ceil(Math.sqrt(this.universe_size));
        return x % mod;
    }

    generate_index(x, y) {
        const ru = Math.ceil(Math.sqrt(this.universe_size));
        return x * ru + y;
    }

    insert(x) {
        if (this.minimum === -1) {
            this.minimum = x;
            this.maximum = x;
        } else {
            if (x < this.minimum) {
                [this.minimum, x] = [x, this.minimum];
            }

            if (this.universe_size > 2) {
                if (this.clusters[this.high(x)].minimum === -1) {
                    this.summary.insert(this.high(x));
                    this.clusters[this.high(x)].minimum = this.low(x);
                    this.clusters[this.high(x)].maximum = this.low(x);
                } else {
                    this.clusters[this.high(x)].insert(this.low(x));
                }
            }

            if (x > this.maximum) {
                this.maximum = x;
            }
        }
    }

    isMember(x) {
        if (x === this.minimum || x === this.maximum) {
            return true;
        } else if (this.universe_size === 2) {
            return false;
        } else {
            return this.clusters[this.high(x)].isMember(this.low(x));
        }
    }

    successor(x) {
        if (this.universe_size === 2) {
            return x === this.minimum && this.maximum !== this.minimum ? this.maximum : -1;
        } else if (this.minimum !== -1 && x < this.minimum) {
            return this.minimum;
        } else {
            let maxLow = this.clusters[this.high(x)].maximum;
            if (maxLow !== -1 && this.low(x) < maxLow) {
                let offset = this.clusters[this.high(x)].successor(this.low(x));
                return this.generate_index(this.high(x), offset);
            } else {
                let succCluster = this.summary.successor(this.high(x));
                if (succCluster !== -1) {
                    let offset = this.clusters[succCluster].minimum;
                    return this.generate_index(succCluster, offset);
                }
            }
        }
        return -1;
    }
    
    

    predecessor(x) {
        if (this.universe_size === 2) {
            return x === this.maximum && this.maximum !== this.minimum ? this.minimum : -1;
        } else if (this.maximum !== -1 && x > this.maximum) {
            return this.maximum;
        } else {
            let minLow = this.clusters[this.high(x)].minimum;
            if (minLow !== -1 && this.low(x) > minLow) {
                let offset = this.clusters[this.high(x)].predecessor(this.low(x));
                return this.generate_index(this.high(x), offset);
            } else {
                let predCluster = this.summary.predecessor(this.high(x));
                if (predCluster === -1) {
                    if (this.minimum !== -1 && x > this.minimum) {
                        return this.minimum;
                    } else {
                        return -1;
                    }
                } else {
                    let offset = this.clusters[predCluster].maximum;
                    return this.generate_index(predCluster, offset);
                }
            }
        }
    }

    delete(x) {
        if (this.minimum === this.maximum) {
            this.minimum = -1;
            this.maximum = -1;
        } else if (this.universe_size === 2) {
            if (x === this.minimum) {
                this.minimum = this.maximum;
            } else {
                this.maximum = this.minimum;
            }
        } else {
            if (x === this.minimum) {
                let firstCluster = this.summary.minimum;
                x = this.generate_index(firstCluster, this.clusters[firstCluster].minimum);
                this.minimum = x;
            }

            this.clusters[this.high(x)].delete(this.low(x));

            if (this.clusters[this.high(x)].minimum === -1) {
                this.summary.delete(this.high(x));
                if (x === this.maximum) {
                    let summaryMax = this.summary.maximum;
                    if (summaryMax === -1) {
                        this.maximum = this.minimum;
                    } else {
                        this.maximum = this.generate_index(summaryMax, this.clusters[summaryMax].maximum);
                    }
                }
            } else if (x === this.maximum) {
                this.maximum = this.generate_index(this.high(x), this.clusters[this.high(x)].maximum);
            }
        }
    }
}

// Usage example
const tree = new VanEmdeBoas(16);

// Insert elements
tree.insert(2);
tree.insert(4);
tree.insert(5);
tree.insert(7);
tree.insert(9);

// Check if element is a member
console.log(tree.isMember(4)); // true
console.log(tree.isMember(6)); // false

// Find successor
console.log(tree.successor(4)); // 5 // (Does not work) gets 3
console.log(tree.successor(5)); // 7

// Find predecessor
console.log(tree.predecessor(5)); // 4
console.log(tree.predecessor(7)); // 5

// Delete elements
tree.delete(5);
console.log(tree.isMember(5)); // false
console.log(tree.successor(4)); // 7  // (Does not work) gets 3
console.log(tree.predecessor(7)); // 4



