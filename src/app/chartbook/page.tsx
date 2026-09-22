'use client';

import { BookContext } from '@/context/Booksprovider';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';

import {
    Bar,
    BarChart,
    BarShapeProps,
    CartesianGrid,
    Label,
    LabelList,
    LabelProps,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const colors = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#8B5CF6',
    '#EC4899',
    '#14B8A6',
];

// Custom bar shape
const getPath = (
    x: number,
    y: number,
    width: number,
    height: number
) => {
    return `
        M${x},${y + height}
        C${x + width / 3},${y + height}
        ${x + width / 2},${y + height / 3}
        ${x + width / 2},${y}
        C${x + width / 2},${y + height / 3}
        ${x + (2 * width) / 3},${y + height}
        ${x + width},${y + height}
        Z
    `;
};

const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index } = props;

    const color = colors[(index ?? 0) % colors.length];

    return (
        <path
            d={getPath(
                Number(x),
                Number(y),
                Number(width),
                Number(height)
            )}
            fill={color}
            stroke={color}
            strokeWidth={props.isActive ? 4 : 0}
            style={{
                transition: 'stroke-width 0.3s ease',
            }}
        />
    );
};

// Custom label
const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];

    return <Label {...props} fill={fill} />;
};

const Chartbook = () => {
    const { readbook } = useContext(BookContext);

    const data = readbook.map((book: IBook, index: number) => ({
        name: book.bookName,
        uv: book.totalPages,
        pv: index + 1,
        amt: index + 1,
    }));

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
            <div className="mx-auto w-full max-w-5xl rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">

                {/* Title */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">
                        Book Pages Overview
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Total pages of your books
                    </p>
                </div>

                {/* Chart */}
                <div className="w-full overflow-x-auto">
                    <BarChart
                        style={{
                            width: '100%',
                            maxWidth: '900px',
                            height: '500px',
                            margin: '0 auto',
                        }}
                        responsive
                        data={data}
                        margin={{
                            top: 30,
                            right: 20,
                            left: 10,
                            bottom: 60,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="name"
                            angle={-20}
                            textAnchor="end"
                            height={70}
                            tick={{
                                fontSize: 12,
                                fill: '#64748B',
                            }}
                        />

                        <YAxis
                            width="auto"
                            tick={{
                                fontSize: 12,
                                fill: '#64748B',
                            }}
                        />

                        <Tooltip
                            cursor={{
                                fill: '#F1F5F9',
                            }}
                            contentStyle={{
                                borderRadius: '12px',
                                border: '1px solid #E2E8F0',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                            }}
                        />

                        <Bar
                            dataKey="uv"
                            name="Total Pages"
                            shape={TriangleBar}
                            activeBar
                            radius={[8, 8, 0, 0]}
                        >
                            <LabelList
                                content={CustomColorLabel}
                                position="top"
                            />
                        </Bar>
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Chartbook;