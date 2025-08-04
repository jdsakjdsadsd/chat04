import mongoose from 'mongoose';

const sessaoChatSchema = new mongoose.Schema({
    sessionId: String,
    botId: String,
    startTime: Date,
    endTime: Date,
    messages: Array,
}, { 
    strict: false 
});

// IMPORTANTE: Verifique no seu MongoDB Atlas se o nome da sua coleção é 'sessoesChat'.
// Se for diferente, troque o nome aqui no terceiro argumento.
const SessaoChat = mongoose.model('SessaoChat', sessaoChatSchema, 'sessoesChat');

export default SessaoChat;