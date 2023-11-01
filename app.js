new Vue({
    el: '#app',
    data: {
        expression: '',
        buttons: [
            { label: '+' },
            { label: '-' },
            { label: '*' },
            { label: '/' },
        ],
    },
    methods: {
        addToExpression(label) {
            this.expression += label;
        },
        calculateResult() {
            try {
                this.expression = eval(this.expression);
            } catch (error) {
                this.expression = 'Error';
            }
        },
        clearExpression() {
            this.expression = '';
        },
    },
});