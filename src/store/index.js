import { createStore } from "vuex";
import axios from "axios";
export default createStore({
    state: {
        top: [],
        new: [],
        ask: [],
        show: [],
        job: [],
        best: [],
    },
    mutations: {
        setNew(state, payload) {
            state.new = payload;
        },
        setTop(state, payload) {
            state.top = payload;
        },
        setAsk(state, payload) {
            state.ask = payload;
        },
        setJob(state, payload) {
            state.job = payload;
        },
        setShow(state, payload) {
            state.show = payload;
        },
        setBest(state, payload) {
            state.best = payload;
        },
    },
    actions: {
        async fetchApinewstories({ commit }) {
            try {
                if(this.state.new.length === 0){
                    const responseNew = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
                    commit('setNew', responseNew.data);
                }
            }
            catch (error) {
                console.error('failed', error);
            }
        },
        async fetchApitopstories ({ commit }){
            try{
                    if(this.state.top.length === 0){
                    const responseTop = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
                    commit('setTop', responseTop.data);
                }
            }

            catch (error) {
                console.error('failed', error);
            }
        },
        async fetchApiaskstories ({ commit }){
            try{
                if(this.state.ask.length === 0){
                    const responseAsk = await axios.get('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty');
                    commit('setAsk', responseAsk.data);
                }
            }

            catch (error) {
                console.error('failed', error);
            }
        },
        async fetchApijobstories ({ commit }){
            try{
                if(this.state.job.length === 0){
                    const responseJob = await axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty');
                    commit('setJob', responseJob.data);
                }
            }

            catch (error) {
                console.error('failed', error);
            }
        },
        async fetchApishowstories ({ commit }){
            try{
                if(this.state.show.length === 0){
                    const responseShow = await axios.get('https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty');
                    commit('setShow', responseShow.data);
                }
            }

            catch (error) {
                console.error('failed', error);
            }
        },
        async fetchBestApi ({ commit }){
            try{
                if(this.state.best.length === 0){
                    const responseBest = await axios.get('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty');
                    commit('setBest', responseBest.data);
                }
            }
            catch (error) {
                console.error('failed', error);
            }
        },
    },
    getters: {
        getNew(state) {
            return state.new;
        },
        getTop(state){
            return state.top;
        },
        getAsk(state){
            return state.ask;
        },
        getJob(state){
            return state.job;
        },
        getShow(state){
            return state.show;
        },
        getBest(state){
            return state.best;
        }
    },
});
