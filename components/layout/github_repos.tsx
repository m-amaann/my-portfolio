// 'use client';

// import { useSectionInView } from '@/hooks/useSection';
// import SectionHeading from '../section-heading';
// import React, { useEffect, useState } from 'react';

// type RepoTypes = {
//     id: number;
//     name: string;
//     html_url: string;
//     description: string;
//     stargazers_count: number;
//     full_name: string;
//     languages_used?: string[];
//     commit_count?: number;
// };

// export default function GithubRepos() {
//     const { ref } = useSectionInView("Projects", 0.3);
//     const [repos, setRepos] = useState<RepoTypes[]>([]);

//     useEffect(() => {
//         const fetchRepos = async () => {
//             try {
//                 const res = await fetch('https://api.github.com/users/m-amaann/repos');
//                 const data: RepoTypes[] = await res.json();

//                 // Sort by stars (optional)
//                 const sorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count);

//                 // Fetch commits & languages per repo
//                 const enhancedRepos = await Promise.all(
//                     sorted.map(async (repo) => {
//                         const [commitsRes, languagesRes] = await Promise.all([
//                             fetch(`https://api.github.com/repos/${repo.full_name}/commits`),
//                             fetch(`https://api.github.com/repos/${repo.full_name}/languages`)
//                         ]);

//                         const commitsData = await commitsRes.json();
//                         const languagesData = await languagesRes.json();

//                         return {
//                             ...repo,
//                             commit_count: Array.isArray(commitsData) ? commitsData.length : 0,
//                             languages_used: Object.keys(languagesData),
//                         };
//                     })
//                 );

//                 setRepos(enhancedRepos);
//             } catch (error) {
//                 console.error('Error fetching GitHub data:', error);
//             }
//         };

//         fetchRepos();
//     }, []);

//     return (
//         <section
//             ref={ref}
//             id="GitHub Repositories"
//             className="scroll-mt-28 w-full mb-28 sm:mb-40"
//         >
//             <SectionHeading>GitHub Repositories</SectionHeading>
//             <div className="p-6 max-w-4xl mx-auto">
//                 <div className="grid md:grid-cols-2 gap-6">
//                     {repos.map((repo) => (
//                         <div key={repo.id} className="bg-white shadow-md rounded-xl p-5 border border-gray-200">
//                             <a
//                                 href={repo.html_url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-blue-600 text-xl font-semibold hover:underline"
//                             >
//                                 {repo.name}
//                             </a>
//                             <p className="mt-2 text-gray-700 text-sm">
//                                 {repo.description || 'No description provided.'}
//                             </p>
//                             <div className="mt-3 text-sm text-gray-500 space-y-1">
//                                 <div>⭐ Stars: {repo.stargazers_count}</div>
//                                 <div>🧠 Commits: {repo.commit_count ?? 'Loading...'}</div>
//                             </div>

//                             {repo.languages_used && repo.languages_used.length > 0 && (
//                                 <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
//                                     {repo.languages_used.map((language, index) => (
//                                         <span
//                                             key={index}
//                                             className="bg-gray-200 dark:bg-gray-700 text-[10px] text-neutral-700 dark:text-neutral-300 py-0.5 px-2 rounded-full"
//                                         >
//                                             {language}
//                                         </span>
//                                     ))}
//                                 </div>
//                             )}

//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
