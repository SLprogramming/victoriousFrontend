import { defineStore } from "pinia"
import { getAxiosClient } from "../data/axios"
import { useAppStore } from "./app"

export const useNoteStore = defineStore("note", {
	state: () => ({
		// user: JSON.parse(sessionStorage.getItem("DATA")),
	}),
	actions: {
		fetchNotes(payload) {
			const appStore = useAppStore()
			return getAxiosClient()
				.get(`doctor-notes`, { params: payload })
				.then(res => {
					return res.data
				})
				.catch(error => {
					throw error
				})
		},
		fetchNote(payload) {
			const appStore = useAppStore()
			return getAxiosClient()
				.get(`doctor-note/` + payload._id)
				.then(res => {
					return res.data
				})
				.catch(error => {
					throw error
				})
		},
		createNote(payload) {
			const appStore = useAppStore()
			return getAxiosClient()
				.post(`doctor-note`, payload)
				.then(res => {
					return res.data
				})
				.catch(error => {
					throw error
				})
		},
		deleteNote(payload) {
			const appStore = useAppStore()
			return getAxiosClient()
				.delete(`doctor-note/` + payload._id)
				.then(res => {
					return res.data
				})
				.catch(error => {
					throw error
				})
		},
		updateNote(payload) {
			const appStore = useAppStore()
			return getAxiosClient()
				.put(`doctor-note/` + payload._id)
				.then(res => {
					return res.data
				})
				.catch(error => {
					throw error
				})
		},
	},
})
