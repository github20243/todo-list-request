import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const [tasks, setTasks] = useState([]);

	async function postRequest(data) {
		try {
			await fetch("https://9750bfdaeb1755e3.mokky.dev/todos", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			toast.success("Успешно Добавлено POST запрос");
			getRequest();
		} catch (error) {
			toast.error(" Error");
			console.log(error);
		}
	}

	async function getRequest() {
		try {
			const response = await fetch("https://9750bfdaeb1755e3.mokky.dev/todos");
			const data = await response.json();
			setTasks(data);
		} catch (error) {
			console.log(error);
		}
	}

	async function deleteRequest(id) {
		try {
			await fetch(`https://9750bfdaeb1755e3.mokky.dev/todos/${id}`, {
				method: "DELETE",
			});
			getRequest();
			toast.error("Успешно удалено");
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getRequest();
	}, []);

	return (
		<div
			style={{
				border: "1px solid black",
				width: "700px",
				minHeight: "400px",
				margin: "40px auto",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "start",
			}}>
			<TodoForm postRequest={postRequest} />
			<TodoList tasks={tasks} deleteRequest={deleteRequest} />
			<ToastContainer/>
			<a href="sms:+996501071101">
				Связатся с нами
			</a>
		</div>
	);
};

export default App;
