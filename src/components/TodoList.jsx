import React from "react";
import styled from "styled-components";

const TodoList = ({ tasks, deleteRequest }) => {
	const deleteHandler = (id) => {
		deleteRequest(id);
	};
	return (
		<TaskList>
			{tasks.map(({ id, inputValue }) => (
				<Task key={id}>
					<p>
						<StyledDidplay>
							{inputValue}
							<Button onClick={() => deleteHandler(id)}>Delete</Button>
						</StyledDidplay>
					</p>
				</Task>
			))}
		</TaskList>
	);
};

export default TodoList;

const TaskList = styled.ul`
	list-style-type: none;
	padding: 0;
	width: 600px;
	height: auto;
	background-color: aqua;
	margin-top: 10px;
	padding-top: 20px;
`;

const Task = styled.li`
	background: #fff;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
	margin-bottom: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StyledDidplay = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Button = styled.button`
	background-color: red;
	color: white;
	border: none;
	padding: 10px 20px;
	cursor: pointer;
	border-radius: 3px;
`;
