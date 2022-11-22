const SidebarItem = () => {
    return (
        // <li
        //     className={`p-2 menu-parent ${
        //         item?.path === location.pathname ||
        //         item?.parentPath !== null &&
        //             location.pathname.includes(item?.parentPath)
        //             ? 'bg-gray-200 text-black border-l-cyan-500 border-l-[3px] rounded-sm'
        //             : location.pathname === item?.path ||
        //               item?.parentPath !== null &&
        //                   location.pathname.includes(item?.parentPath)
        //             ? 'bg-gray-200 border-l-cyan-500 border-l-[3px] rounded-sm'
        //             : ''
        //     }`}
        //     key={item.name}
        // >
        //     <Link
        //         to={item.path ? item.path : '#'}
        //         className='flex items-center justify-between'
        //     >
        //         <div className='flex items-center font-semibold'>
        //             <item.icon
        //                 className={`w-4 h-4 mr-2`}
        //                 style={{ color: item.background }}
        //             />
        //             <span className='font-normal'>{item.name}</span>
        //         </div>
        //         {item.child && (
        //             <span>
        //                 <FiChevronDown className='w-4 h-4 mr-4 drop-down-icon' />
        //             </span>
        //         )}
        //     </Link>

        //     {item.child && (
        //         <div className='bg-white absolute mt-2'>
        //             <ul
        //                 className={`${
        //                      ? 'dark-mode' : 'normal'
        //                 } menu-child`}
        //                 onClick={(e) => e.stopPropagation()}
        //             >
        //                 {item.child?.map((p) => (
        //                     <li
        //                         onClick={(e) => e.stopPropagation()}
        //                         key={p.name}
        //                         className={`${
        //                             location.pathname === p.path &&
        //                                 ? 'bg-gray-200 text-black'
        //                                 : location.pathname === p.path &&
        //                                   !
        //                                 ? 'bg-gray-200 rounded-sm'
        //                                 : ''
        //                         } ${
        //
        //                                 ? 'hover:bg-white hover:text-black'
        //                                 : 'hover:bg-txt-third'
        //                         }`}
        //                     >
        //                         <Link
        //                             className={`px-[28px] line py-[6px] w-full flex items-center`}
        //                             to={p.path}
        //                         >
        //                             <div className='dot'></div>
        //                             <p className='flex items-center gap-1 truncate'>
        //                                 <span>
        //                                     <p.icon />
        //                                 </span>
        //                                 <span>{p.name}</span>
        //                             </p>
        //                         </Link>
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>
        //     )}
        // </li>
        <></>
    );
};

export default SidebarItem;
