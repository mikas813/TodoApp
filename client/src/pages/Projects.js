import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/authContext";
import {useHttp} from "../hooks/httpHook";
import {Loader} from "../components/Loader";
import {ProjectCard} from "../components/ProjectCard";

export const Projects = () => {
	const {token} = useContext(AuthContext);
	const {request, loading} = useHttp();
	const [projects, setProjects] = useState([]);

	const getProjects = useCallback(async () => {
		try {
			const fetched = await request(`/api/projects/`, 'GET', null, {
				Authorization: `Bearer ${token}`
			});
			setProjects(fetched);
		} catch (e) {
		}
	}, [token, request]);

	useEffect(() => {
		getProjects();
	}, [getProjects]);

	if (loading) {
		return <Loader/>;
	}

	return (
		<>
			{!loading && projects && <ProjectCard project={projects}/>}
		</>
	);
};