const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function Pagination(data, per_page) {
    let current = 0;
    let total = Math.ceil(data.length / per_page)

    function paginate(selected) {
        const start = selected * per_page;
        const end = start + per_page;
        const result = data.slice(start, end);
        return result;
    }

    function isValid(page) {
        return page >= 0 && page <= total - 1;
    }

    return {
        next: function () {
            if (!isValid(current + 1)) return;
            current++;
            return paginate(current);
        },
        prev: function () {
            if (!isValid(current - 1)) return;
            current--;
            return paginate(current);
        },
        goto: function (page) {
            if (!isValid(page)) {
                return;
            }
            current = page;
            return paginate(page)

        },
        getTotal: function () {
            return total;
        },
        getCurrent: function () {
            return current;
        },
        getData: function () {
            if (!isValid()) return;
            return paginate(current);
        }
    };
}

const obj = Pagination(DATA, 2);
console.log(obj.getData());