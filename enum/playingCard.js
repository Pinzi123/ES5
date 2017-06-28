/**
 * [Card 定义一个玩牌的类]
 * @Author   [wyp]
 * @DateTime 2017-06-18T00:33:01+0800
 * @param    {[type]}                 suit [每张牌都有花色]
 * @param    {[type]}                 rank [点数]
 */
function Card(suit, rank){
	this.suit=suit
	this.rank=rank
}
// 使用枚举类型定义花色和点数
Card.Suit=enumeration({Clubs:1,Diamonds:2,Hearts:3,Spades:4})
Card.Rank=enumeration({Two:2,Three:3,Four:4,Five:5,Six:6,Sevent:7,Eight:8,Nine:9,Ten:10,Jack:11,Queen:12,King:13,Ace:14})
Card.prototype.toString=function(){
	return this.rank.toString + "of" + this.suit.toString()
}
Card.prototype.compareTo=function(that){
	if(this.rank<that.rank) return -1
    if (this.rank>that.rank) return 1
    return 0
}
// 以扑克牌的玩法规则对牌进行排序
Card.orderByRank=function(a, b){return a.compareTo(b)}
// 以桥牌的玩法规则进行排序
Card.orderBySuit=function(a, b){
	if (a.suit < b.suit) return -1
    if (a.suit > b.suit) return 1
    if (a.rank < b.rank) return -1
    if (a.rank > b.rank) return 1
    return 0
}
// 定义用于表示标准扑克票的类
function Deck() {
	var cards = this.cards = []
	Card.Suit.foreach(function(s){
		Card.Rank.foreach(function(r){
			cards.push(new Card(s, r))
		})
	})
}
// 洗牌方法
Deck.prototype.shuffle=function(){
	var deck = this.cards, len = deck.length
	for (var i = len - 1; i > 0; i--) {
		var r = Math.floor(Math.random()*(i+1)),temp
		temp = deck[i]
		deck[i] = deck[r]
		deck[r] = temp
	}
	return this
}
// 发牌方法
Deck.prototype.deal=function(n){
	if (this.cards.length<n) throw "Out of cards"
    let mycards = this.cards.slice(this.cards.length-n, this.cards.length)
	this.cards.splice(this.cards.length-n, n)
	return mycards
}

// 创建一副扑克牌，洗牌并且发牌
var deck = (new Deck()).shuffle()
console.log('洗牌', deck);
var hand = deck.deal(13).sort(Card.orderBySuit)
console.log('发牌', this.hand);