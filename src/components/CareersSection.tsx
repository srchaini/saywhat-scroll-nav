const CareersSection = () => {
  const positions = [
    { title: 'Front End Intern', experience: '0-2', location: 'Remote' },
    { title: 'Data Science Intern', experience: '0-2', location: 'Remote' },
    { title: 'Business Analysis Intern', experience: '0-2', location: 'Remote' },
    { title: 'Python Developer Intern', experience: '0-2', location: 'Remote' }
  ];

  return (
    <section id="careers" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-12">
          <h2 className="text-2xl font-bold text-primary-foreground bg-primary px-24 py-3 rounded-lg">
            Careers
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-foreground">
                <th className="text-left py-3 px-4 text-lg font-bold text-foreground">Positions</th>
                <th className="text-left py-3 px-4 text-lg font-bold text-foreground">Experience</th>
                <th className="text-left py-3 px-4 text-lg font-bold text-foreground">Location</th>
                <th className="text-left py-3 px-4 text-lg font-bold text-foreground"></th>
              </tr>
            </thead>
            <tbody>
              {positions.map((position, index) => (
                <tr key={index} className="border-b border-border">
                  <td className="py-3 px-4 text-foreground">{position.title}</td>
                  <td className="py-3 px-4 text-foreground">{position.experience}</td>
                  <td className="py-3 px-4 text-foreground">{position.location}</td>
                  <td className="py-3 px-4">
                    <button className="text-foreground hover:text-accent transition-colors underline">
                      Apply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
